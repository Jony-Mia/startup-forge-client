import { Bars, Persons,SquarePlus, Envelope, Gear, ChartColumnStacked, Rocket, Person, CopyPlus, PersonPencil, FileLetterW } from "@gravity-ui/icons";

const layout = ({ children }) => {
    return (
        <div className=" container mx-auto my-3">
            <div className="flex gap-4">
                <div>
                    <Navigation />
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};


export function Navigation() {
    const navItems = [
        { icon: ChartColumnStacked, label: "Dashboard Overview", href:"/dashboard" },
        { icon: Rocket, label: "My Startup" },
        { icon: Persons, label: "Collaborator" },
        { icon: SquarePlus, label: "Create Startup" },
        { icon: CopyPlus, label: "Create Opportunities" },
        { icon: PersonPencil, label: "Manage" },
        { icon: Envelope, label: "Messages" },
        { icon: FileLetterW, label: "Application" },
        { icon: Person, label: "Profile" },
        { icon: Gear, label: "Settings" },
    ];

    return (

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
    );
}
export default layout;