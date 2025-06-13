import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductos = createAsyncThunk(
  "fetchProductos",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const productos = await response.json();
    return productos;
  }
);
const ProductosSlice = createSlice({
  name: "productos",
  initialState: {
    entities: [],
    favoritos: [],
  },
  reducers: {

      add(state, action) {
      const nuevoProducto = { ...action.payload, id: Date.now() };
      state.entities.push(nuevoProducto);
    },

     edit(state, action) {
      const index = state.entities.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.entities[index] = action.payload;
      }
    },

    toggleFavorito(state, action) {
      const id = action.payload;
      if (state.favoritos.includes(id)) {
        state.favoritos = state.favoritos.filter(fid => fid !== id);
      } else {
        state.favoritos.push(id);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductos.fulfilled, (state, action) => {
      state.entities = [...state.entities, ...action.payload];
    });
  },
});

export const { add, edit, toggleFavorito } = ProductosSlice.actions;
export default ProductosSlice.reducer;

