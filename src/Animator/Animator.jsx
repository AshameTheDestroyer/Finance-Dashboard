/** Animates the observable elements in the page. */
export default function Animate() {
    const OBSERVER = new IntersectionObserver(entries =>
        entries.forEach(entry =>
            entry.target
                .classList[entry.isIntersecting ? "add" : "remove"]
                ("shown"))
    );

    const HIDDEN_ELEMENTS =
        document.querySelectorAll(".observable");

    console.log(HIDDEN_ELEMENTS);

    HIDDEN_ELEMENTS.forEach(hiddenElement =>
        OBSERVER.observe(hiddenElement));
}