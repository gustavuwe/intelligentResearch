import { pgTable, uuid, varchar, text } from 'drizzle-orm/pg-core'

export const VotesTable = pgTable('votes', {
  id: uuid('id').primaryKey().defaultRandom(),
  cpf: varchar('cpf').unique().notNull(),
  candidate: varchar('candidate').notNull(),
  geo_loc: text('geo_loc'),
})
