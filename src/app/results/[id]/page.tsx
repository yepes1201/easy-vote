import { Block } from "@/components/layout/block";

export default function ResultsPage({ params }: { params: { id: string } }) {
  return <Block>Results of poll {params.id}</Block>;
}
