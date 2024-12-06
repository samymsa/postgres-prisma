import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Contributor } from "./contributor";

export async function Contributors({
  contributors,
}: {
  contributors: Contributor[];
}) {
  const data = contributors.map((contributor: Contributor, index: number) => {
    return {
      id: contributor.author.id,
      name: contributor.author.login,
      designation: `#${index + 1}`,
      image: contributor.author.avatar_url,
    };
  });

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={data} />
    </div>
  );
}
