const ExpenseSummaryService = require("../../services/summary/ExpenseSummaryService");
const ReturnSummaryService = require("../../services/summary/ReturnSummaryService");
const PurchaseSummaryService = require("../../services/summary/PurchaseSummaryService");
const SalesSummaryService = require("../../services/summary/SalesSummaryService");

exports.ExpensesSummary=async (req, res) => {
    let Result=await ExpenseSummaryService(req)
    res.status(200).json(Result)
}

exports.ReturnSummary=async (req, res) => {
    let Result=await ReturnSummaryService(req)
    res.status(200).json(Result)
}

exports.PurchaseSummary=async (req, res) => {
    let Result=await PurchaseSummaryService(req)
    res.status(200).json(Result)
}

exports.SalesSummary=async (req, res) => {
    let Result=await SalesSummaryService(req)
    res.status(200).json(Result)
}