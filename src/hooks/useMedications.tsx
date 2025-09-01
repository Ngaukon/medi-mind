import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from '@/hooks/use-toast';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time_of_day: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

interface MedicationLog {
  id: string;
  medication_id: string;
  taken: boolean;
  taken_at: string;
  notes?: string;
}

export function useMedications() {
  const { user } = useAuth();
  const [medications, setMedications] = useState<Medication[]>([]);
  const [logs, setLogs] = useState<MedicationLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchMedications();
      fetchTodayLogs();
    } else {
      setMedications([]);
      setLogs([]);
      setLoading(false);
    }
  }, [user]);

  const fetchMedications = async () => {
    try {
      const { data, error } = await supabase
        .from('medications')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMedications(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching medications",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchTodayLogs = async () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const { data, error } = await supabase
        .from('medication_logs')
        .select('*')
        .gte('taken_at', `${today}T00:00:00.000Z`)
        .lt('taken_at', `${today}T23:59:59.999Z`);

      if (error) throw error;
      setLogs(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching logs",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const addMedication = async (medicationData: {
    name: string;
    dosage: string;
    frequency: string;
    time_of_day: string;
    notes?: string;
  }) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('medications')
        .insert([{
          ...medicationData,
          user_id: user.id
        }])
        .select();

      if (error) throw error;
      
      if (data) {
        setMedications([...medications, data[0]]);
        toast({
          title: "Medication added",
          description: `${medicationData.name} has been added to your list.`
        });
      }
    } catch (error: any) {
      toast({
        title: "Error adding medication",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const logMedication = async (medicationId: string, taken: boolean, notes?: string) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('medication_logs')
        .insert([{
          user_id: user.id,
          medication_id: medicationId,
          taken,
          notes,
          taken_at: new Date().toISOString()
        }])
        .select();

      if (error) throw error;
      
      if (data) {
        setLogs([...logs, data[0]]);
        toast({
          title: taken ? "Medication taken" : "Medication skipped",
          description: taken ? "Good job staying on track!" : "Don't forget to take it later."
        });
      }
    } catch (error: any) {
      toast({
        title: "Error logging medication",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const isMedicationTakenToday = (medicationId: string) => {
    return logs.some(log => log.medication_id === medicationId && log.taken);
  };

  return {
    medications,
    logs,
    loading,
    addMedication,
    logMedication,
    isMedicationTakenToday,
    refetch: () => {
      fetchMedications();
      fetchTodayLogs();
    }
  };
}