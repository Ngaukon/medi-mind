import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedicationCard } from "./MedicationCard";
import { AddMedicationDialog } from "./AddMedicationDialog";
import { Plus, Calendar, TrendingUp, Clock } from "lucide-react";

// Mock data - in real app this would come from backend
const mockMedications = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    nextTime: "8:00 AM",
    taken: false
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    nextTime: "12:00 PM",
    taken: true
  },
  {
    id: 3,
    name: "Vitamin D3",
    dosage: "1000 IU",
    frequency: "Once daily",
    nextTime: "8:00 AM",
    taken: false
  }
];

export const Dashboard = () => {
  const [medications, setMedications] = useState(mockMedications);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleMarkTaken = (id: number) => {
    setMedications(prev => 
      prev.map(med => med.id === id ? { ...med, taken: true } : med)
    );
  };

  const handleMarkSkipped = (id: number) => {
    // In real app, this would log the skip
    console.log(`Medication ${id} skipped`);
  };

  const todayStats = {
    taken: medications.filter(med => med.taken).length,
    total: medications.length,
    upcoming: medications.filter(med => !med.taken).length,
    adherence: Math.round((medications.filter(med => med.taken).length / medications.length) * 100)
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Your Dashboard</h1>
          <p className="text-muted-foreground">Manage your medications and track your progress</p>
        </div>
        <Button 
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-primary hover:bg-primary-dark text-primary-foreground"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Medication
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taken Today
            </CardTitle>
            <Calendar className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{todayStats.taken}/{todayStats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Upcoming
            </CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{todayStats.upcoming}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Adherence Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{todayStats.adherence}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Medications
            </CardTitle>
            <Plus className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{medications.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Medication Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Today's Medications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {medications.map((medication) => (
            <MedicationCard
              key={medication.id}
              name={medication.name}
              dosage={medication.dosage}
              frequency={medication.frequency}
              nextTime={medication.nextTime}
              taken={medication.taken}
              onMarkTaken={() => handleMarkTaken(medication.id)}
              onMarkSkipped={() => handleMarkSkipped(medication.id)}
            />
          ))}
        </div>
      </div>

      <AddMedicationDialog 
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
      />
    </div>
  );
};