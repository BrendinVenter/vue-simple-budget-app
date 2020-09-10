// store/transactions.js

export const state = () => ({
  transactions: [
    { type: 'credit', description: 'Salary', amount: 500000 },
    { type: 'debit', description: 'Laptop', amount: 200000 },
    { type: 'debit', description: 'PS4', amount: 50000 },
    { type: 'debit', description: 'Groceries', amount: 40000 },
  ],
  modal: false,
  modalResolve: null,
})

export const getters = {
  getTransactions: (state) => {
    return state.transactions
  },
  getBalance(state) {
    let balance = 0

    if (state.transactions.length) {
      state.transactions.forEach((transaction) => {
        if (transaction.type === 'credit') {
          balance += transaction.amount
        } else if (transaction.type === 'debit') {
          balance -= transaction.amount
        }
      })
    }

    return balance
  },
  getModal(state) {
    return state.modal
  },
}

export const mutations = {
  addTransaction(state, transaction) {
    state.transactions.push(JSON.parse(JSON.stringify(transaction)))
  },
  deleteTransaction(state, index) {
    state.transactions.splice(index, 1)
  },
  hideModal(state) {
    state.modalResolve = null
    state.modal = false
  },
  showModal(state, payload) {
    state.modalResolve = payload.resolve
    state.modal = true
  },
  resolveModal(state) {
    if (state.modalResolve) {
      state.modalResolve()
    }
  },
}

export const actions = {
  addTransaction(context, transaction) {
    context.commit('addTransaction', transaction)
  },

  deleteTransaction(context, index) {
    context.commit('deleteTransaction', index)
  },
  hideModal(context) {
    context.commit('hideModal')
  },
  showModal(context) {
    return new Promise((resolve, reject) => {
      context.commit('showModal', { resolve })
    })
  },
  resolveModal(context) {
    context.commit('resolveModal')
    context.commit('hideModal')
  },
}
// end
