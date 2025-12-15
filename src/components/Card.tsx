import {Card as HeroUICard, type CardProps} from "@heroui/react";
import {useTheme} from "next-themes";

export function Card({children, ...props}: CardProps) {
  const {resolvedTheme} = useTheme();
  return (
    <HeroUICard
      shadow={props.shadow ?? (resolvedTheme === "dark" ? "none" : "md")}
      {...props}>
      {children}
    </HeroUICard>
  );
}
