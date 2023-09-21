import numpy as np
import pandas as pd

df = pd.read_excel("/Users/bigsexy/Downloads/SafeStub_Financial_Model_Template.xlsx")
dates = df.columns[2:]
totalBuyers = np.array(df.iloc[3, 2:])
totalOrders = np.array(df.iloc[4, 2:])
shape = totalOrders.shape


def full(n: float):
    return np.full(totalOrders.shape, n)


averageOrderValue = full(345)
benefitsTaxesEtc = full(833)
buyerCommission = full(0.05)
sellerOrderRevPercent = full(0.95)
paymentProcessingPercent = full(0.35)
paymentProcessingFixedFee = full(0.079)
orderRevenue = totalOrders * averageOrderValue
buyerCommissionRevenue = orderRevenue * buyerCommission
totalNetRevenue = orderRevenue * buyerCommissionRevenue


sellerOrderRevenue = orderRevenue * sellerOrderRevPercent
creditCardFees = (totalNetRevenue * paymentProcessingPercent) + (
    totalOrders * paymentProcessingFixedFee
)

totalCogs = sellerOrderRevenue + creditCardFees

grossMargin = totalNetRevenue * totalCogs
