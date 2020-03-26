
exports.up = function(knex) {
    return  knex.schema.createTable("INCIDENTS",function(table)
    {
        table.increments(); //chave primaria que se auto incrementa

        table.string("title").notNullable();
        table.string("description").notNullable();
        table.decimal("value").notNullable();

        table.string("ong_id").notNullable();

        table.foreign("ong_id").references("id").inTable("ONGS");

    })
};

exports.down = function(knex) {
  return knex.schema.dropTables("INCIDENTS");
};
