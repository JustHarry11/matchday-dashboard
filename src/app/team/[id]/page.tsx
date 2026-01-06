interface TeamPageProps {
  params: {
    id: string;
  };
}

export default function TeamPage({ params }: TeamPageProps) {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold">
        Team Dashboard: {params.id}
      </h2>
    </section>
  );
}
