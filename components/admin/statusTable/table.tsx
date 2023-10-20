"use client"
import { Button } from '#/components/ui/button'
import { Checkbox } from '#/components/ui/checkbox'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '#/components/ui/dropdown-menu'
import { Input } from '#/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table'
import { showTicketGroupSelectModal } from '#/state/slices/notifications'
import store from '#/state/store'
import { AdminPendingTicketList } from '#/types/query'
import { SortingState, ColumnFiltersState, VisibilityState, ColumnDef, useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table'
import { ArrowUpDown, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import TicketGroupSelectModal from './ticketGroupSelectModal'
import clsx from 'clsx'
import SetStatusModal from './setStatusModal'


interface TicketStatusTableProps {
    tickets: AdminPendingTicketList
}

const TicketStatusTable = ({ tickets }: TicketStatusTableProps) => {
    const showModal = (transactionId?: number | null) => {
        if (!transactionId) return
        let items = tickets.filter((t) => t.TicketGroup?.transaction?.id === transactionId)
        store.dispatch(showTicketGroupSelectModal(items))
    }
    const [transactionDetailId, setTransactionDetailId] = useState<number | false>(false)
    const [rowSelection, setRowSelection] = useState<{ [k: string]: boolean }>({})
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const [statusChangeIds, setStatusChangeIds] = useState<number[] | null>(null)

    const [columnVisibility, setColumnVisibility] =
        useState<VisibilityState>({
            ticketId: false
        })

    const columns: ColumnDef<NonNullable<typeof tickets>[number]>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    defaultChecked={false}
                    onCheckedChange={(value) => {
                        return table.toggleAllPageRowsSelected(!!value)
                    }}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => {
                        return row.toggleSelected(!!value)
                    }}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "email",
            accessorFn: (row) => row.seller.email,
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Seller Email
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => (
                <div className="">{row.getValue("email")}</div>
            ),
        },
        {
            accessorKey: "transactionId",
            accessorFn: (row) => row.TicketGroup?.transaction?.id?.toString(),
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Transaction Id
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => (
                <div
                    className=""
                    onClick={() => setTransactionDetailId(row.getValue("transactionId"))}
                >{row.getValue("transactionId")}</div>
            ),
            enableColumnFilter: true
        },
        {
            accessorKey: "ticketId",
            accessorFn: (row) => row.id,
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Ticket Id
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => (
                <div
                    className=""
                >{row.getValue("ticketId")}</div>
            ),
            enableColumnFilter: true,

        },
        {
            accessorKey: "section",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Section
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => (
                <div className="">{row.getValue("section")}</div>
            ),
        },
        {
            accessorKey: "row",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Row
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="">{row.getValue("row")}</div>,
        },
        {
            accessorKey: "seat",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Seat
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                return <div className="">{row.getValue("seat")}</div>
            },
        },
    ]

    const table = useReactTable({
        data: tickets,
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
    })

    const showStatusModal = () => {
        let ids = Object.entries(rowSelection).filter((f) => f[1]).map((j) => {
            return table.getRow(j[0]).getValue("ticketId") as number
        })
        setStatusChangeIds(ids)
    }

    return (
        <div className={"w-5/6"}>
            <TicketGroupSelectModal
                transactionId={transactionDetailId}
                onAcceptText="Filter"
                onAccept={() => {
                    table.getColumn("transactionId")?.setFilterValue(`${transactionDetailId}`)
                }}
                clear={() => setTransactionDetailId(false)}
            />
            <SetStatusModal
                close={() => setStatusChangeIds(null)}
                ticketIds={statusChangeIds || undefined}
            />
            <h2 className={"text-xl md:text-2xl lg:text-3xl mb-6 w-full text-center"}>Tickets Pending Transfer to <span className={"font-bold text-primary"}>SafeStub</span></h2>
            <div className="w-full min-w-[min(560px,92vw)]">
                <div className="flex items-center py-4">
                    <div className={"flex flex-row justify-start items-center gap-3"}>
                        <Input
                            placeholder="Filter emails..."
                            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("email")?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm"
                        />
                        <Button
                            onClick={() => {
                                table.getColumn("transactionId")?.setFilterValue(null)
                            }}
                            className={clsx("whitespace-nowrap", Boolean(!table.getColumn("transactionId")?.getFilterValue()) && "hidden")}>Clear Filter</Button>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Columns <ChevronDown className="ml-2 h-4 w-4" />
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
                                    )
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
                                        )
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
                    <div className="flex-1 text-sm text-muted-foreground">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className="space-x-2">
                        <Button
                            size="sm"
                            onClick={() => showStatusModal()}
                            disabled={Object.values(rowSelection).filter((f) => f).length === 0}
                        >
                            Set Status
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


TicketStatusTable.displayName = "TicketStatusTable"


export default TicketStatusTable;
