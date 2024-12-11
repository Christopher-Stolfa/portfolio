<template>
  <div>
    <h1>My Work</h1>
    <p></p>
    <div class="grid">
      <div class="card">
        <div class="card-image">
          <img alt="Logo" src="/ssa.png" />
        </div>
        <div class="card-body">
          <h3>Spitzer School of Architecture</h3>
          <p>
            The Bernard and Anne Spitzer School of Architecture is a renowned institution offering
            innovative architectural education within the City College of New York. I redesigned and
            rebuilt the school’s landing page, enhancing its visual identity, user experience, and
            accessibility.
          </p>
        </div>
        <div class="card-footer">
          <p>Technology Used</p>
          <a href="https://ssa.ccny.cuny.edu/" target="_blank" rel="noopener noreferrer">Link</a>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img alt="Logo" src="/bdc.png" />
        </div>
        <div class="card-body">
          <h3>Bert Drobbin, Co.</h3>
          <p>
            The Bert Drobbin Company supplies essential goods, clothing, footwear, home furnishings,
            and appliances to youth facilities, shelters, and other social service programs across
            the tri-state area. I built their website, providing a digital catalog, a platform for
            inquiry-based sales, and a CMS for staff to easily manage and update their offerings.
          </p>
        </div>
        <div class="card-footer">
          <p>Technology Used</p>
          <a href="https://bertdrobbincompany.com/" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Work',
});
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(17rem, 1fr));
  grid-gap: 3rem;
  padding: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}
.card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: 487px;
}
.card-image {
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  img {
    width: 100%;
    height: auto;
    max-height: 17.25rem;
    display: block;
    object-fit: cover;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  @media (max-width: 1024px) {
  }
}
.card-body {
  flex: 1;
  padding: 1rem;
  h3 {
    margin: 0;
  }
}
.card-footer {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #f5f5f5;
}
</style>
