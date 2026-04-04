import { useEffect, useState } from "react";
import { useTransactionStore } from "../../stores/transaction-store";
import { useRole } from "../../hooks/useRole";
import TransactionFilters from "../../components/transaction/TransactionFilters";
import TransactionTable from "../../components/transaction/TransactionTable";
import TransactionModal from "../../components/transaction/TransactionModal";
import TransactionSkeleton from "../../components/skeleton/transaction-skeleton";
import Button from "../../components/ui/button";
import type { Transaction } from "../../types/transaction";

type SortField = "date" | "amount";
type SortDirection = "asc" | "desc";

function Transactions() {
  const { transactions, isLoading, error, fetchTransactions, addTransaction, editTransaction } =
    useTransactionStore();
  const { role } = useRole();
  const isAdmin = role === "admin";

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | undefined>();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  function matchesFilters(txn: Transaction) {
    if (searchQuery && !txn.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (categoryFilter !== "all" && txn.category !== categoryFilter) return false;
    if (typeFilter !== "all" && txn.type !== typeFilter) return false;
    if (statusFilter !== "all" && txn.status !== statusFilter) return false;
    return true;
  }

  function compareTransactions(a: Transaction, b: Transaction) {
    const dir = sortDirection === "asc" ? 1 : -1;
    if (sortField === "date") return a.date.localeCompare(b.date) * dir;
    return (a.amount - b.amount) * dir;
  }

  const filteredTransactions = (transactions ?? []).filter(matchesFilters).sort(compareTransactions);

  function handleSort(field: SortField) {
    if (field === sortField) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  }

  function handleEdit(txn: Transaction) {
    setEditingTransaction(txn);
    setModalOpen(true);
  }

  function handleAdd() {
    setEditingTransaction(undefined);
    setModalOpen(true);
  }

  function handleSave(txn: Transaction) {
    if (editingTransaction) {
      editTransaction(txn.id, txn);
    } else {
      addTransaction(txn);
    }
    setModalOpen(false);
    setEditingTransaction(undefined);
  }

  if (isLoading) {
    return <TransactionSkeleton />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-gray-900 dark:text-white">Transactions</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            View and manage your transactions.
          </p>
        </div>
        {isAdmin && (
          <Button size="sm" onClick={handleAdd}>
            Add Transaction
          </Button>
        )}
      </div>

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
          onEdit={isAdmin ? handleEdit : undefined}
        />
      </div>

      {modalOpen && (
        <TransactionModal
          transaction={editingTransaction}
          onSave={handleSave}
          onClose={() => {
            setModalOpen(false);
            setEditingTransaction(undefined);
          }}
        />
      )}
    </div>
  );
}

export default Transactions;
