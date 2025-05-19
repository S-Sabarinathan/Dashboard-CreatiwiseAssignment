
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Articles",
      items: [
        {
          title: "Create Article",
          url: "/pages",
        },
        {
          title: "Generated Articles",
          url: "#generated-articles",
          isActive: true,
        },
        {
          title: "Keyword Projects",
          url: "/pages",
        },
        {
          title: "AI Keyword to Article",
          url: "/pages",
        },
        {
          title: "Steal Competitor Keyboard",
          url: "/pages",
        },
        {
          title: "Import Keyboard from GSC",
          url: "/pages",
        },
        {
          title: "Manual Keyboard to Article",
          url: "/pages",
        },
        {
          title: "Bulk Keyboard to Article",
          url: "bulk-keyboard",
        },
        {
          title: "Longtail Keyboard to Article",
          url: "/pages",
        },
        {
          title: "Article Settings",
          url: "/pages",
        },
      ],
    },
    {
      title: "Auto Blog",
      url: "/pages",
    },
    {
      title: "Internal Links",
      url: "/pages",
    },
    {
      title: "Free Backlinks",
      url: "/pages",
    },
    {
      title: "Integrations",
      url: "/pages",
    },
    {
      title: "Subscription",
      url: "/pages",
    },
    {
      title: "Affiliate Program",
      url: "program",
    },
    {
      title: "Help Center",
      url: "/pages",
    },
    {
      title: "Updates",
      url: "/pages",
    },
    {
      title: "Live Chart Support",
      url: "/pages",
    },
    {
      title: "___________________________________________",
    },
    {
      title: "Profile",
      url: "/pages",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <h1 className="text-center font-bold text-3xl p-4">abun</h1>
            <SidebarMenuButton size="lg" asChild>
              <Select>
                <SelectTrigger className="rounded-2xl w-[200px]">
                  <a href="#">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span className="font-semibold text-black">
                        amazon.com
                      </span>
                    </div>
                  </a>
                </SelectTrigger>
                <SelectContent className="rounded-2xl w-[200px]">
                  <SelectGroup>
                    <SelectItem value="google">
                      {" "}
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-black">
                          google.com
                        </span>
                      </div>
                    </SelectItem>
                    <SelectItem value="facebook">
                      {" "}
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-black">
                          facebook.com
                        </span>
                      </div>
                    </SelectItem>
                    <SelectItem value="newspaper">
                      {" "}
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-black">
                          newspaper.com
                        </span>
                      </div>
                    </SelectItem>
                    <SelectItem value="twitter">
                      {" "}
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-black">
                          twitter.com
                        </span>
                      </div>
                    </SelectItem>
                    <SelectItem value="instagram">
                      {" "}
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-black">
                          instagram.com
                        </span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={item.isActive}
                          className="p-4 w-60"
                        >
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
