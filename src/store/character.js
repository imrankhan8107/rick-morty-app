import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getCharactersData = async (page, name, character_status, gender) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
      .concat(name ? `&name=${name}` : "")
      .concat(character_status ? `&status=${character_status}` : "")
      .concat(gender ? `&gender=${gender}` : "")
  );
  console.log(
    `https://rickandmortyapi.com/api/character/?page=${page}`
      .concat(name ? `&name=${name}` : "")
      .concat(character_status ? `&status=${character_status}` : "")
      .concat(gender ? `&gender=${gender}` : "")
  );
  const data = await response.json();
  return data.results;
};

const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (obj, thunkAPI) => {
    try {
      const data = await getCharactersData(
        obj.page,
        obj.name,
        obj.character_status,
        obj.gender
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    page: 1,
    character_status: "",
    gender: "",
    name: "",
  },
  reducers: {
    nextPage(state) {
      state.page++;
    },
    prevPage(state) {
      if (state.page > 1) {
        state.page--;
      }
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setStatus(state, action) {
      state.character_status = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
    });
  },
});

export default characterSlice.reducer;
export { getCharacters };
export const { nextPage, prevPage, setGender, setStatus, setName } =
  characterSlice.actions;
