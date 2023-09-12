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
import { ExpenseType } from './adminSettingsSchema'


interface ExpensesTableProps {

}



const expenses: Omit<ExpenseType, "expense_source_input">[] = [
    {
        expense_name: "Front end hosting",
        expense_priority: "10",
        expense_sources: ["Vercel (The dudes that built Next. It just functions best there)", "Aws", "Google Cloud"],
        expense_cost: "~0$"
    },
    {
        expense_name: "Database Hosting (Likely the most expensive)",
        expense_priority: "8",
        expense_sources: ["Vercel (They just started doing this)", "Aws", "Google Cloud", "Railway"],
        expense_cost: "0-20$ / month"
    },
    {
        expense_name: "Analytics",
        expense_priority: "3",
        expense_sources: ["Google Analytics"],
        expense_cost: "0$"
    },
    {
        expense_name: "Id verification",
        expense_priority: "7",
        expense_sources: ["Authenticate.com", "The other one I forgot"],
        expense_cost: "???"
    },
    {
        expense_name: "Advertisement",
        expense_priority: "5",
        expense_sources: ["Google ads (Integrates really well with Google Analytics)"],
        expense_cost: "Per targeted view"
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
                    <TableRow key={expense.expense_name}>
                        <TableCell className="font-medium">{expense.expense_name}</TableCell>
                        <TableCell>{expense.expense_priority}</TableCell>
                        <TableCell>
                            <ul className={"list-disc"}>
                                {expense.expense_sources.map((s, i) => <li key={`${s}-${i}`}>{s}</li>)}
                            </ul>
                        </TableCell>
                        <TableCell className="text-right">{expense.expense_cost}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


ExpensesTable.displayName = "ExpensesTable"


export default ExpensesTable;
