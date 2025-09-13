import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

const quickActions = [
  {
    emoji: "📚",
    label: "Library Hours",
    action: "What are the library hours today?",
    color: "primary"
  },
  {
    emoji: "🍕",
    label: "Dining",
    action: "Where can I eat on campus?",
    color: "secondary"
  },
  {
    emoji: "📅",
    label: "Schedule",
    action: "Help me with my class schedule",
    color: "accent"
  },
  {
    emoji: "🏛️",
    label: "Facilities",
    action: "Show me campus facilities",
    color: "primary"
  },
  {
    emoji: "📋",
    label: "Admin",
    action: "I need help with administrative procedures",
    color: "secondary"
  },
  {
    emoji: "🎯",
    label: "Events",
    action: "What events are happening on campus?",
    color: "accent"
  }
];

export const QuickActions = ({ onActionClick }: QuickActionsProps) => {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-muted-foreground">Quick questions:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`
              h-auto p-3 flex-col gap-1 text-xs transition-smooth hover:scale-105
              ${action.color === 'primary' ? 'hover:bg-primary hover:text-primary-foreground border-primary/20' :
                action.color === 'secondary' ? 'hover:bg-secondary hover:text-secondary-foreground border-secondary/20' :
                'hover:bg-accent hover:text-accent-foreground border-accent/20'}
            `}
            onClick={() => onActionClick(action.action)}
          >
            <span className="text-base">{action.emoji}</span>
            <span>{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};