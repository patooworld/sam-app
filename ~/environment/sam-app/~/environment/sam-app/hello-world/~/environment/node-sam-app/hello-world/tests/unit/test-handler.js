describe("Tests index", function () {
  it("verifies successful response", async () => {
    const result = await app.lambdaHandler(event, context)

    expect(result).to.be.an("object")
    expect(result.statusCode).to.equal(200)
    expect(result.body).to.be.an("string")

    let response = JSON.parse(result.body)

    expect(response).to.be.an("object")
    expect(response.message).to.be.equal("I'm using canary deployments")
  })
})
git add .
git commit -m "Changed return message"
git push
