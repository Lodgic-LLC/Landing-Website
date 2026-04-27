type CalloutType = "info" | "warning" | "danger" | "tip";

const styles: Record<CalloutType, { background: string; border: string; icon: string }> = {
  info:    { background: "#e0f2fe", border: "#0ea5e9", icon: "ℹ️" },
  warning: { background: "#fef9c3", border: "#eab308", icon: "⚠️" },
  danger:  { background: "#fee2e2", border: "#ef4444", icon: "🚨" },
  tip:     { background: "#dcfce7", border: "#22c55e", icon: "💡" },
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { background, border, icon } = styles[type];
  return (
     <div style={{
      background,
      borderLeft: `4px solid ${border}`,
      padding: "1rem",
      borderRadius: "0.375rem",
      margin: "1rem 0",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: children ? "0.25rem" : 0 }}>
        <span>{icon}</span>
        {title && <strong>{title}</strong>}
      </div>
      {children}
    </div> 
  )
}