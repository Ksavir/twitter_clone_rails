class Tweet < ApplicationRecord
    include PgSearch::Model

    #validaciones del formulario en backend
    validates :description, presence: true, length: {maximum:500, minimum:2}
    validates :username, presence: true, length: {maximum:20, minimum: 2}

    #uso tsearch con prefix:true para poder encontrar tambien palabras que contengan la palabra buscada
    pg_search_scope :search_full_text, against: {username: 'A',description: 'B', id: 'C'}, using: {tsearch: { prefix: true }}
end
