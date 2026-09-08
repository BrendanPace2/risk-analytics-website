export function CardLink() {
  return (
    <a
      class="action-card action-card--primary-color action-card--solid"
      href="/example"
    >
      <div class="action-card__title">
          <h3>Getting Started</h3>
          <span class="button--icon button--icon-right">
            <span
              class="utds-icon-before-arrow-right"
              aria-hidden="true">
            </span>
          </span>
      </div>
      <div class="action-card__body">
          Learn how to implement the Design System.
      </div>
    </a>
  );
}
