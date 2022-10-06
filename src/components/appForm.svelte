<form>
  <label>
    Enter api key:
    <input type="text" required />
  </label>

  <label>
    Enter zipcode:
    <input type="number" required />
  </label>

  <button type="submit">Search</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  label,
  button {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  input {
    border-radius: 10px;
    border-width: 1.5px;
    padding: 8px;
  }
</style>
