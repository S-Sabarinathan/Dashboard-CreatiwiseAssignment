"use client";
import { AppSidebar } from "./pages/app-sidebar";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    article: "How to Improve Your Skills in League of Legends",
    keyboard: "league of legends [2240000]",
    words: 4575,
    create: "20 hours ago",
    action: "View",
    publish: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "m5gr84i9",
    article: "How to Master Last Hitting in League of Legends",
    keyboard: "league of legends [2240000]",
    words: 3480,
    create: "21 hours ago",
    action: "View",
    publish: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "m5gr84i9",
    article: "7 Tips for Better TeamPlay in League of Legends",
    keyboard: "league of legends [2240000]",
    words: 2676,
    create: "a day ago",
    action: "View",
    publish: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "m5gr84i9",
    article: "Top Virtual Executive Assistant Services(2024)",
    keyboard: "league of legends [2240000]",
    words: 2408,
    create: "1 Oct, 24",
    action: "View",
    publish: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "m5gr84i9",
    article: "Unlimited Graphics Design Solutions",
    keyboard: "unlimited graphic design services [390]",
    words: 1793,
    create: "---",
    action: "View",
    publish: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "m5gr84i9",
    article: "Top Amazon Payment Methods for Quick Access to Funds",
    keyboard: "Amazon payments methods [3600]",
    words: 2647,
    create: "---",
    action: "View",
    publish: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "m5gr84i9",
    article:
      "Backlinks 101: What are backlinks and why they're important [Free template] ",
    keyboard: "backlinks [8100]",
    words: 2261,
    create: "---",
    action: "View",
    publish: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "m5gr84i9",
    article: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyboard: "ai seo software [880]",
    words: 1543,
    create: "---",
    action: "View",
    publish: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "m5gr84i9",
    article: "Unlimited Graphic Design Services You Can Rely On",
    keyboard: "unlimited graphic design services [390]",
    words: 1974,
    create: "---",
    action: "View",
    publish: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
];

export type Payment = {
  id: string;
  words: number;
  article: string;
  keyboard: string;
  create: string;
  action: string;
  publish: React.ReactNode;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "article",
    header: "Article",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("article")}</div>
    ),
  },
  {
    accessorKey: "keyboard",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown />
          Keyword [Traffic]
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("keyboard")}</div>
    ),
  },
  {
    accessorKey: "words",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown />
            Words
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">{row.getValue("words")}</div>
    ),
  },
  {
    accessorKey: "create",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown />
            Created On
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">{row.getValue("create")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Action
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">
      <Link href="/pages">
        <Button className="text-green-500 border border-green-500 bg-white hover:bg-green-500 hover:text-white">
          {row.getValue("action")}
        </Button>
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "publish",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            className="items-center"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Publish
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex gap-2.5 items-center justify-center">
            {row.getValue("publish")}
          
      </div>
    ),
  },
];

export default function Page() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="md:hidden size-5">
          <SidebarTrigger />
        </div>
        <h1 className="text-5xl text-center font-bold p-3">Articles</h1>
        <div className="flex justify-center space-x-1 my-4">
          <Button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-600 text-white font-medium">
            Generated Articles
          </Button>
          <Link href="/pages">
          <Button className="px-4 py-2 rounded-md bg-white  hover:bg-blue-600  hover:text-white text-gray-700 border">
            Published Articles
          </Button>
          </Link>
          <Link href="/pages">
          <Button className="px-4 py-2 rounded-md bg-white  hover:bg-blue-600  hover:text-white text-gray-700 border">
            Scheduled Articles
          </Button>
          </Link>
          <Link href="/pages">
          <Button className="px-4 py-2 rounded-md bg-white  hover:bg-blue-600  hover:text-white text-gray-700 border">
            Archived Articles
          </Button>
          </Link>
        </div>
        <div className="w-full p-4">
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter article..."
              value={
                (table.getColumn("article")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("article")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm flex-row">
              Total{" "}
              <span className="font-bold">
                {table.getFilteredRowModel().rows.length}
              </span>{" "}
              Article Titles
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                className="hover:bg-green-600 hover:text-white"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                className="hover:bg-green-600 hover:text-white"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
