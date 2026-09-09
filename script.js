function calcularTotal() {
  let producto = parseInt(document.getElementById("producto").value);
  let cantidad = parseInt(document.getElementById("cantidad").value);
 
  let total = producto * cantidad;
 
  document.getElementById("total").innerText = "Total: $" + total;
}
 
function realizarPedido() {
  let nombre = document.getElementById("nombre").value.trim();
  let producto = document.getElementById("producto");
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let precio = parseInt(producto.value);
  let nombreProducto = producto.options[producto.selectedIndex].text;
  let total = precio * cantidad;
 
  if (!nombre) {
    alert("Por favor ingresa tu nombre antes de confirmar el pedido.");
    return;
  }
 
  alert(
    "¡Pedido confirmado!\n\n" +
    "Cliente: " + nombre + "\n" +
    "Producto: " + nombreProducto + " x" + cantidad + "\n" +
    "Total a pagar: $" + total
  );
 
  window.location.href = "index.html";
}