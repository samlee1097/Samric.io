import { createSlice, createSelector, createEntityAdapter } from "@reduxjs/toolkit";

const messagesAdapter = createEntityAdapter()

const initialState = messagesAdapter.getInitialState({
})

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
      messageReceived(state, action) {
        const data = action.payload.data
        const message = {
          id: data.id,
          ...data.attributes,
          teamId: data.relationships.team.data.id,
          userId: data.relationships.user.data.id,
        }
        messagesAdapter.addOne(state, message)
      }
    }
})

export const { messageReceived } = messagesSlice.actions

export default messagesSlice.reducer

export const { selectAll: selectAllMessages } = messagesAdapter.getSelectors(
    (state) => state.messages
)
  
export const selectMessagesByTeam = createSelector(
    [selectAllMessages, (state, teamId) => teamId],
    (messages, teamId) => messages.filter((message) => message.teamId === teamId)
)
