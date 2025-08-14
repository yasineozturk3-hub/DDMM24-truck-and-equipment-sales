(function initLayout() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  const { SITE_NAME } = window.SITE_CONFIG || { SITE_NAME: "Dad's Equipment" };

  if (header) {
    header.innerHTML = `
      <div class="bg-white border-b">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="./index.html" class="flex items-center gap-3 font-bold text-lg">
            <span class="inline-block w-8 h-8 rounded-lg bg-gray-900"></span>
            <span>${SITE_NAME}</span>
          </a>
          <nav class="flex items-center gap-6 text-sm font-medium">
            <a class="hover:underline" href="./inventory.html">Inventory</a>
            <a class="hover:underline" href="./contact.html">Contact</a>
          </nav>
        </div>
      </div>`;
  }

  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `
      <div class="mt-12 border-t bg-white">
        <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>© ${year} ${SITE_NAME}. All rights reserved.</p>
          <p><a class="hover:underline" href="./contact.html">Get in touch</a></p>
        </div>
      </div>`;
  }
})();
