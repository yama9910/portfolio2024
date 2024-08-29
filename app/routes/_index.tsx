import type { MetaFunction } from "@remix-run/cloudflare";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "~/lib/components/ui/navigation-menu";

export const meta: MetaFunction = () => {
	return [
		{ title: "Yui Yamashita" },
		{
			name: "description",
			content: "Yui Yamashita's personal history and projects",
		},
	];
};

export default function Index() {
	return <></>;
}
