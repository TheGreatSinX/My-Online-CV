<script>
  function callViber() {
    window.location.href = "viber://call?number=1234567890";
  }

  function chatViber() {
    window.location.href = "viber://chat?number=1234567890";
  }
</script>

<button onclick="callViber()">Start a Viber call</button>
<button onclick="chatViber()">Start a Viber chat</button>
