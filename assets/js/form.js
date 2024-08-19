var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();

  // Check if all fields are filled
  var inputs = form.querySelectorAll("input, textarea");
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value.trim()) {
      alert("Please fill out all fields.");
      return; // Stop form submission
    }
  }

  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      // Setelah formulir berhasil dikirim, refresh halaman
      location.reload();
    })
    .catch((error) => {
      // Jika ada kesalahan, Anda masih dapat memilih untuk merefresh halaman atau menampilkan pesan kesalahan
      location.reload();
    });
}

form.addEventListener("submit", handleSubmit);
