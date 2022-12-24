function updateVisitCount(response) {
  document.querySelector("#counter").textContent = response.value;
}