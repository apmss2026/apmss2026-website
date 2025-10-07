from playwright.sync_api import sync_playwright, expect, Page
import os

def run_verification(page: Page):
    # Get the absolute path to the index.html file
    # The CWD for the script will be the root of the repository.
    file_path = os.path.abspath("index.html")

    # Navigate to the local HTML file
    page.goto(f"file://{file_path}")

    # Wait for the loading screen to become hidden.
    # The 'fade-out' class is added, which sets opacity to 0 and pointer-events to none.
    loading_screen = page.locator(".loading")

    # We wait for the opacity to be 0, as the element is no longer set to display:none.
    expect(loading_screen).to_have_css("opacity", "0", timeout=2000)

    # Take a screenshot for visual verification.
    screenshot_path = "jules-scratch/verification/verification.png"
    page.screenshot(path=screenshot_path, full_page=True)

    print(f"Screenshot saved to {screenshot_path}")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        run_verification(page)
        browser.close()

if __name__ == "__main__":
    main()