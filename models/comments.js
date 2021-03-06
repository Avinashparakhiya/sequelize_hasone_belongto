'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'comments',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      post_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      bookName: {
        type: DataTypes.TEXT,
        required: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      underscored: true,
    }
  );

  return Comment;
};
