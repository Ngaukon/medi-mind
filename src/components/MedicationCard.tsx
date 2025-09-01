import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Pill, Check, X } from "lucide-react";

interface MedicationCardProps {
  name: string;
  dosage: string;
  frequency: string;
  nextTime: string;
  taken: boolean;
  onMarkTaken: () => void;
  onMarkSkipped: () => void;
}

export const MedicationCard = ({
  name,
  dosage,
  frequency,
  nextTime,
  taken,
  onMarkTaken,
  onMarkSkipped
}: MedicationCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <div className="bg-primary-light rounded-full p-2">
              <Pill className="h-4 w-4 text-primary" />
            </div>
            {name}
          </CardTitle>
          <Badge variant={taken ? "default" : "secondary"} className="bg-secondary text-secondary-foreground">
            {taken ? "Taken" : "Pending"}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Dosage:</span>
            <p className="font-medium text-foreground">{dosage}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Frequency:</span>
            <p className="font-medium text-foreground">{frequency}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm bg-muted p-3 rounded-lg">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Next dose:</span>
          <span className="font-medium text-foreground">{nextTime}</span>
        </div>
        
        {!taken && (
          <div className="flex gap-2 pt-2">
            <Button 
              onClick={onMarkTaken}
              className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
            >
              <Check className="h-4 w-4 mr-2" />
              Mark Taken
            </Button>
            <Button 
              variant="outline" 
              onClick={onMarkSkipped}
              className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <X className="h-4 w-4 mr-2" />
              Skip
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};