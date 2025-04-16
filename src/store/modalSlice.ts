import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalConfig } from '../types/modal';
import React from 'react';

interface ModalState {
  modals: ModalConfig[];
}

const initialState: ModalState = {
  modals: [],
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalConfig>) => {
      state.modals.push(action.payload);
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state.modals = state.modals.filter((modal) => modal.id !== action.payload);
    },
    closeAllModals: (state) => {
      state.modals = [];
    },
  },
});

export const { openModal, closeModal, closeAllModals } = modalSlice.actions;
export default modalSlice.reducer;
