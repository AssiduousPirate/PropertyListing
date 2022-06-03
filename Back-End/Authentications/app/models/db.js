module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
        Name: string,
        Email: string,
        Password: string, 
        },
        {timestamps: true}
    )
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject()
        object.id = _id
        return object
    })
    const Users = mongoose.model("Users", schema)
    return Users
}