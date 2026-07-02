"use client"
import { Bars, Envelope, Gear, ChartColumnStacked, Rocket, Person, CopyPlus, PersonPencil, FileLetterW } from "@gravity-ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";


    const navItems = [
        { icon: ChartColumnStacked, label: "Dashboard Overview", href: "/dashboard" },
        { icon: Rocket, label: "My Startup", href: "/dashboard/my-startup" },
        // { icon: Persons, label: "Collaborator" },
        // { icon: SquarePlus, label: "Create Startup" },
        { icon: CopyPlus, label: "Create Opportunities", href: "/dashboard/create" },
        { icon: PersonPencil, label: "Manage Startup", href: "/dashboard/manageStartup" },
        // { icon: Envelope, label: "Messages" },
        { icon: FileLetterW, label: "Applications", href: "/applications" },
        // { icon: Person, label: "Profile" },
        // { icon: Gear, label: "Settings" },
    ];

    
const layout = ({ children }) => {
    return (
        <div suppressHydrationWarning className="  container mx-auto my-3">
            <div className="flex gap-2">
                <div className=" sm:hidden md:hidden lg:block w-[25%] ">
                    <Navigation />
                </div>
                <div className=" relative  sm:block md:block lg:hidden  ">
                    <PhoneDrawer />
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};




export function Navigation() {
    const path = usePathname();
   
    return (
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="w-full">
                    <button
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors ${path === item.href ? "bg-default" : ""} hover:bg-default`}
                        type="button"
                    >
                        <item.icon className="size-5 text-muted" />
                        {item.label}
                    </button>
                </Link>
            ))}
        </nav>
    );
}

export default layout;






// import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

export function PhoneDrawer () {
    // const navItems = [
    //     { icon: House, label: "Home" },
    //     { icon: Magnifier, label: "Search" },
    //     { icon: Bell, label: "Notifications" },
    //     { icon: Envelope, label: "Messages" },
    //     { icon: Person, label: "Profile" },
    //     { icon: Gear, label: "Settings" },
    // ];

    return (
        <Drawer>
            <Button variant="secondary">
                <Bars />
                Menu
            </Button>
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                    <Drawer.Dialog>
                        <Drawer.CloseTrigger />
                        <Drawer.Header>
                            <Drawer.Heading>Navigation</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <button
                                        key={item.label}
                                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                                        type="button"
                                    >
                                        <item.icon className="size-5 text-muted" />
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}