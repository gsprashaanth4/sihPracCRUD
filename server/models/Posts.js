module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts",{
        title: {
            type: DataTypes.STRING,
            allowedNull: false,
        },

        postText: {
            type: DataTypes.STRING,
            allowedNull: false,
        },

        username: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
    });

    return Posts;
};