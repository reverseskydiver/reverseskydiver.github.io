export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

export function Badges({ items }: { items: string[] }) {
  return <div className="badges" aria-label="Technologies">{items.map((item) => <Badge key={item}>{item}</Badge>)}</div>;
}
