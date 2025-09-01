import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMedications } from "@/hooks/useMedications";

interface AddMedicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddMedicationDialog = ({ open, onOpenChange }: AddMedicationDialogProps) => {
  const { addMedication } = useMedications();
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "",
    time: "",
    notes: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    await addMedication({
      name: formData.name,
      dosage: formData.dosage,
      frequency: formData.frequency,
      time_of_day: formData.time,
      notes: formData.notes || undefined,
    });
    
    onOpenChange(false);
    setFormData({ name: "", dosage: "", frequency: "", time: "", notes: "" });
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground">
            Add New Medication
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Medication Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., Lisinopril"
              required
              className="border-input focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dosage" className="text-sm font-medium text-foreground">
              Dosage *
            </Label>
            <Input
              id="dosage"
              value={formData.dosage}
              onChange={(e) => setFormData(prev => ({ ...prev, dosage: e.target.value }))}
              placeholder="e.g., 10mg, 500mg"
              required
              className="border-input focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="frequency" className="text-sm font-medium text-foreground">
              Frequency *
            </Label>
            <Select 
              value={formData.frequency} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, frequency: value }))}
            >
              <SelectTrigger className="border-input focus:border-primary">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="once-daily">Once daily</SelectItem>
                <SelectItem value="twice-daily">Twice daily</SelectItem>
                <SelectItem value="three-times-daily">Three times daily</SelectItem>
                <SelectItem value="four-times-daily">Four times daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="as-needed">As needed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="text-sm font-medium text-foreground">
              Preferred Time *
            </Label>
            <Input
              id="time"
              type="time"
              value={formData.time}
              onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
              required
              className="border-input focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-medium text-foreground">
              Notes (Optional)
            </Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              placeholder="Any special instructions..."
              className="border-input focus:border-primary"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Medication"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};