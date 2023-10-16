import numpy as np
import pandas as pd

df = pd.read_excel("/Users/bigsexy/Downloads/SafeStub_Financial_Model_Template.xlsx")
dates = df.columns[2:]
totalBuyers = np.array(df.iloc[3, 2:])
totalOrders = np.array(df.iloc[4, 2:])
shape = totalOrders.shape


def full(n: float):
    return np.full(totalOrders.shape, n)


nameMap = {
    "Total Buyers": 5,
    "Total Orders": 6,
    "Order Revenue": 11,
    "Buyer Commission Revenue": 12,
    "Total Net Revenue": 13,
    "Seller Order Revenue": 17,
    "Credit Card Fees": 18,
    "Total COGS": 19,
    "Gross Margin": 21,
    "GM%": 22,
    "Sales/Marketing": 27,
    "Creative": 28,
    "Technology": 29,
    "Product Mgmt": 30,
    "Exec / Admin": 31,
    "Benefits, Taxes, Etc.": 32,
    "Total Personnel Exp": 33,
    "Total Other OPEX: Advertising Spend": 36,
    "Total Other OPEX: Other Marketing": 37,
    "Total Other OPEX: Technology": 38,
    "Total Other OPEX: Misc Fixed Exp": 39,
    "Total Other OPEX: Variable Exp % of Rev": 40,
    "Total Other OPEX: Other OPEX": 41,
    "Total OPEX": 43,
    "Operating Profit / Burn Rate": 45,
    "New Capital": 47,
    "Cash Balance / Runway": 48,
    "Revenue: Average Ticket Quantity by Order": 54,
    "Revenue: Average Price per Ticket": 55,
    "Revenue: AOV (average order value)": 56,
    "Commission - Buyer": 57,
    "Commission - Seller": 61,
    "Seller Order Rev": 62,
    "Payment Processing %": 63,
    "Payment Processing Fixed Fee per Order": 64,
    "Headcount: Sales / Marketing": 69,
    "Headcount: Creative": 70,
    "Headcount: Technology": 71,
    "Headcount: Product Mgmt": 72,
    "Headcount: Exec / Admin": 73,
    "Headcount: Benefits, Taxes, Etc.": 74,
    "Other OPEX: Other Marketing": 77,
    "Other OPEX: Technology": 78,
    "Other OPEX: Misc Fixed Exp": 79,
    "Other OPEX: Variable Exp % of Rev": 80,
}

salaries = {
    "Sales / Marketing": 90000,
    "Creative": 60000,
    "Technology": 40000,
    "Product Management": 80000,
    "Exec / Admin": 0,
}

df = pd.DataFrame()
df["Total Orders"] = totalOrders
df["Total Buyers"] = totalBuyers

df["Revenue: Commission: Buyer"] = 0.05
df["Revenue: Average Price per Ticket"] = 150
df["Revenue: Average Ticket Quantity by Order"] = 2.3

df["Payment Processing Fixed Fee per Order"] = 0.79
df["Payment Processing %"] = 0.0349
df["COGS: Commission: Seller"] = 0.05
df["COGS: Seller Order Revenue"] = 1 - df["COGS: Commission: Seller"]

# Total Net Revenue

df["Revenue: AOV (average order value)"] = (
    df["Revenue: Average Ticket Quantity by Order"]
    * df["Revenue: Average Price per Ticket"]
)
df["Order Revenue"] = df["Total Orders"] * df["Revenue: AOV (average order value)"]
df["Buyer Commission Revenue"] = df["Order Revenue"] * df["Revenue: Commission: Buyer"]

df["Total Net Revenue"] = df["Order Revenue"] + df["Buyer Commission Revenue"]

df["Seller Order Revenue"] = df["Order Revenue"] * df["COGS: Seller Order Revenue"]
df["Credit Card Fees"] = (df["Total Net Revenue"] * df["Payment Processing %"]) + (
    df["Total Orders"] * df["Payment Processing Fixed Fee per Order"]
)
df["Total COGS"] = df["Seller Order Revenue"] + df["Credit Card Fees"]

df["Gross Margin"] = df["Total Net Revenue"] - df["Total COGS"]
df["GM%"] = df["Gross Margin"] / df["Total Net Revenue"]

df["Headcount: Sales / Marketing"] = 0
df["Headcount: Creative"] = 0
df["Headcount: Technology"] = 1
df["Headcount: Product Management"] = 0
df["Headcount: Exec/Admin"] = 1
df["Headcount: Benefits, Taxes, Etc."] = 0.25

# Operating expenses
df["Personnel Expense: Sales/Marketing"] = (
    salaries["Sales / Marketing"] / 12 * df["Headcount: Sales / Marketing"]
)
df["Personnel Expense: Creative"] = (
    salaries["Creative"] / 12 * df["Headcount: Creative"]
)
df["Personnel Expense: Technology"] = (
    salaries["Technology"] / 12 * df["Headcount: Technology"]
)
df["Personnel Expense: Product Management"] = (
    salaries["Product Management"] / 12 * df["Headcount: Product Management"]
)
df["Personnel Expense: Exec/Admin"] = (
    salaries["Exec / Admin"] / 12 * df["Headcount: Exec/Admin"]
)
df["Personnel Expense: Benefits, Taxes, Etc"] = (
    df["Personnel Expense: Sales/Marketing"]
    + df["Personnel Expense: Creative"]
    + df["Personnel Expense: Technology"]
    + df["Personnel Expense: Product Management"]
    + df["Personnel Expense: Exec/Admin"]
) * df["Headcount: Benefits, Taxes, Etc."]

df["Total Personnel Exp"] = (
    df["Personnel Expense: Sales/Marketing"]
    + df["Personnel Expense: Creative"]
    + df["Personnel Expense: Technology"]
    + df["Personnel Expense: Product Management"]
    + df["Personnel Expense: Exec/Admin"]
    + df["Personnel Expense: Benefits, Taxes, Etc"]
)


# Other OPEX
df["Other OPEX: Other Marketing"] = 250
df["Other OPEX: Technology"] = 150
df["Other OPEX: Misc Fixed Exp"] = 0
df["Other OPEX: Variable Exp % of Rev"] = 0.025


# Total Other OPEX
# df["Total Other Opex: Avdertising Spend"] =
df["Total Other Opex: Other Marketing"] = df["Other OPEX: Other Marketing"]
df["Total Other Opex: Technology"] = df["Other OPEX: Technology"]
df["Total Other Opex: Misc Fixed Exp"] = df["Other OPEX: Misc Fixed Exp"]
df["Total Other Opex: Variable Exp % of Rev"] = (
    df["Total Net Revenue"] * df["Other OPEX: Variable Exp % of Rev"]
)
df["Other OPEX"] = (
    df["Total Other Opex: Other Marketing"]
    + df["Total Other Opex: Technology"]
    + df["Total Other Opex: Misc Fixed Exp"]
    + df["Total Other Opex: Variable Exp % of Rev"]
    # + df["Total Other Opex: Avdertising Spend"]
)

df["Total OPEX"] = df["Total Personnel Exp"] + df["Other OPEX"]

df["Operating Profit / Burn Rate"] = df["Gross Margin"] - df["Total OPEX"]

df["New Capital"] = 0

df.at[0, "New Capital"] = 25000

cbSeries = pd.Series(df["New Capital"] + df["Operating Profit / Burn Rate"])
df["Cash Balance / Runway"] = cbSeries.cumsum()
