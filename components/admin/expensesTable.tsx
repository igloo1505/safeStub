import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "#/components/ui/table"


interface ExpensesTableProps {

}

interface ExpenseType {
    name: string
    priority: number
    sources: string[]
    cost: string
}


const expenses: ExpenseType[] = [
    {
        name: "Front end hosting",
        priority: 10,
        sources: ["Vercel (The dudes that built Next. It just functions best there)", "Aws", "Google Cloud"],
        cost: "~0$"
    },
    {
        name: "Database Hosting (Likely the most expensive)",
        priority: 8,
        sources: ["Vercel (They just started doing this)", "Aws", "Google Cloud", "Railway"],
        cost: "0-20$ / month"
    },
    {
        name: "Analytics",
        priority: 3,
        sources: ["Google Analytics"],
        cost: "0$"
    },
    {
        name: "Id verification",
        priority: 7,
        sources: ["Authenticate.com", "The other one I forgot"],
        cost: "???"
    },
    {
        name: "Advertisement",
        priority: 5,
        sources: ["Google ads (Integrates really well with Google Analytics)"],
        cost: "Per targeted view"
    },
]

const ExpensesTable = (props: ExpensesTableProps) => {
    return (
        <Table>
            <TableCaption>Expense Estimates.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Sources</TableHead>
                    <TableHead className="text-right">Guestimate</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {expenses.map((expense) => (
                    <TableRow key={expense.name}>
                        <TableCell className="font-medium">{expense.name}</TableCell>
                        <TableCell>{expense.priority}</TableCell>
                        <TableCell>
                            <ul className={"list-disc"}>
                                {expense.sources.map((s, i) => <li key={`${s}-${i}`}>{s}</li>)}
                            </ul>
                        </TableCell>
                        <TableCell className="text-right">{expense.cost}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


ExpensesTable.displayName = "ExpensesTable"


export default ExpensesTable;
