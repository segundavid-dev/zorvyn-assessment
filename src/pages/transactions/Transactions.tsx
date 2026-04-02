import { useEffect, useState, useMemo } from "react";
import { useTransactionStore } from "../../stores/transaction-store";
import TransactionFilters from "../../components/transaction/TransactionFilters";
import TransactionTable from "../../components/transaction/TransactionTable";
import TransactionSkeleton from "../../components/skeleton/transaction-skeleton";

type SortField = "date" | "amount";
type SortDirection = "asc" | "desc";

function Transactions() {
  const { transactions, isLoading, error, fetchTransactions } =
    useTransactionStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const filteredTransactions = useMemo(() => {
    if (!transactions) return [];

    return transactions
      .filter((txn) => {
        if (
          searchQuery &&
          !txn.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
          return false;
        if (categoryFilter !== "all" && txn.category !== categoryFilter)
          return false;
        if (typeFilter !== "all" && txn.type !== typeFilter) return false;
        if (statusFilter !== "all" && txn.status !== statusFilter) return false;
        return true;
      })
      .sort((a, b) => {
        const dir = sortDirection === "asc" ? 1 : -1;
        if (sortField === "date") return a.date.localeCompare(b.date) * dir;
        return (a.amount - b.amount) * dir;
      });
  }, [
    transactions,
    searchQuery,
    categoryFilter,
    typeFilter,
    statusFilter,
    sortField,
    sortDirection,
  ]);

  function handleSort(field: SortField) {
    if (field === sortField) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  }

  if (isLoading) {
    return <TransactionSkeleton />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <h1 className="font-serif text-3xl text-gray-900">Transactions</h1>
      <p className="mt-1 text-sm text-gray-500">
        View and manage your transactions.
      </p>

      <div className="mt-6">
        <TransactionFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          category={categoryFilter}
          onCategoryChange={setCategoryFilter}
          type={typeFilter}
          onTypeChange={setTypeFilter}
          status={statusFilter}
          onStatusChange={setStatusFilter}
        />
      </div>

      <div className="mt-5">
        <TransactionTable
          transactions={filteredTransactions}
          sortField={sortField}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
      </div>
    </div>
  );
}

export default Transactions;
