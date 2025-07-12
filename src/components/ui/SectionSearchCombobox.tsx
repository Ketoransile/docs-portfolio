"use client";
import * as React from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SectionSearchComboboxProps {
  sectionLinks: { name: string; href: string }[];
}

export default function SectionSearchCombobox({ sectionLinks }: SectionSearchComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const selected = sectionLinks.find((s) => s.name === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[220px] justify-between bg-zinc-900 border-zinc-800 text-zinc-200 hover:border-fuchsia-400"
        >
          {selected ? selected.name : "Search sections..."}
          <ChevronsUpDown className="opacity-50 ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0 bg-zinc-900 border-zinc-800">
        <Command>
          <CommandInput placeholder="Type a section..." className="h-9" />
          <CommandList>
            <CommandEmpty>No section found.</CommandEmpty>
            <CommandGroup>
              {sectionLinks.map((section) => (
                <CommandItem
                  key={section.name}
                  value={section.name}
                  onSelect={() => {
                    setValue(section.name);
                    setOpen(false);
                    window.location.href = section.href;
                  }}
                  className="text-zinc-200"
                >
                  {section.name}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === section.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
} 