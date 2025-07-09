# Beauty & Fashion Shop Website

A beautiful, responsive website for a women's beauty and fashion shop featuring nails, hair care, makeup, and clothing products.

## 🌟 Features

### Design & Layout
- **Feminine Design**: Soft pastel colors, rounded elements, and elegant typography
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Beautiful Typography**: Uses Google Fonts (Playfair Display & Poppins)

### Pages & Functionality
- **Home Page** (`index.html`): Hero section, category overview, and about section
- **Products Page** (`products.html`): Product showcase with filtering by category
- **Shopping Cart** (`cart.html`): Interactive cart with price calculations
- **Contact Page** (`contact.html`): Contact form with PHP processing

### Interactive Features
- **Product Filtering**: Filter products by category (nails, hair, makeup, clothes)
- **Shopping Cart**: Add/remove items, quantity controls, price calculations
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Validation**: Client-side and server-side validation
- **Notifications**: Success/error notifications for user actions

### Technical Features
- **Local Storage**: Cart data persists between sessions
- **PHP Form Processing**: Contact form handled with server-side validation
- **Responsive Grid**: CSS Grid and Flexbox for modern layouts
- **Smooth Animations**: CSS transitions and keyframe animations

## 🛠️ Tech Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript**: Interactive features and cart functionality
- **PHP**: Form processing and server-side validation

## 📁 Project Structure

```
GHI_project2/
├── index.html          # Home page
├── products.html       # Products showcase
├── cart.html          # Shopping cart
├── contact.html       # Contact form
├── style.css          # All styling
├── script.js          # JavaScript functionality
├── contact_form.php   # PHP form handler
└── README.md          # This file
```

## 🚀 Setup Instructions

### Option 1: Local Development (Recommended)
1. **Install XAMPP** (or similar local server):
   - Download from [https://www.apachefriends.org/](https://www.apachefriends.org/)
   - Install and start Apache server

2. **Place Project Files**:
   - Copy all project files to `htdocs` folder in XAMPP directory
   - Example: `C:\xampp\htdocs\beauty-fashion-shop\`

3. **Access Website**:
   - Open browser and go to: `http://localhost/beauty-fashion-shop/`
   - The website will be fully functional with PHP support

### Option 2: Simple File Server
1. **For HTML/CSS/JS only** (without PHP):
   - Use any local server or VS Code Live Server extension
   - Note: Contact form won't work without PHP

2. **For PHP functionality**:
   - Use XAMPP, WAMP, or any PHP-compatible server

## 🎨 Design Features

### Color Palette
- **Primary**: Soft pink gradients (`#f8b4d9` to `#e8a2c8`)
- **Secondary**: Pastel backgrounds (`#fef7f0`, `#f8e8f5`)
- **Text**: Dark gray (`#2c3e50`) and medium gray (`#666`)
- **Accents**: Category-specific colors for products

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body Text**: Poppins (clean sans-serif)
- **Responsive**: Font sizes adjust for different screen sizes

### Layout
- **Grid System**: CSS Grid for main layouts
- **Flexbox**: For navigation and component alignment
- **Mobile-First**: Responsive design starting from mobile

## 🛍️ Product Categories

### 💅 Nails
- Gel Nail Polish Set ($24.99)
- Nail Art Kit ($18.50)
- Nail Care Set ($15.99)

### 💇‍♀️ Hair Care
- Professional Hair Dryer ($89.99)
- Hydrating Shampoo ($22.99)
- Hair Styling Kit ($45.99)

### 💄 Makeup
- Luxury Lipstick Set ($34.99)
- Eyeshadow Palette ($28.50)
- Foundation & Concealer ($32.99)

### 👗 Fashion
- Summer Dress ($65.99)
- Casual Blouse ($42.50)
- Designer Handbag ($129.99)

## 🔧 Customization

### Adding Products
1. Open `products.html`
2. Add new product cards in the appropriate category section
3. Include `data-category` and `data-name` attributes
4. Update JavaScript product lists in `script.js`

### Changing Colors
1. Open `style.css`
2. Modify CSS custom properties or color values
3. Main colors are in the navigation and button sections

### Modifying Layout
1. Edit grid and flexbox properties in `style.css`
2. Responsive breakpoints are at 768px and 480px
3. Test on different screen sizes

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔒 Security Features

### PHP Form Handler
- Input sanitization and validation
- Email format validation
- XSS protection with `htmlspecialchars()`
- CSRF protection (basic implementation)

### JavaScript Security
- Input validation for forms
- Safe DOM manipulation
- Local storage for cart data

## 🚀 Deployment

### Shared Hosting
1. Upload all files to your web hosting
2. Ensure PHP is enabled on your hosting
3. Update email address in `contact_form.php`
4. Test contact form functionality

### VPS/Dedicated Server
1. Upload files to web root directory
2. Configure web server (Apache/Nginx)
3. Enable PHP module
4. Set proper file permissions

## 🐛 Troubleshooting

### Contact Form Not Working
- Ensure PHP is enabled on your server
- Check file permissions for `contact_form.php`
- Verify email configuration in PHP

### Cart Not Saving
- Check if JavaScript is enabled
- Clear browser cache and local storage
- Verify `script.js` is properly linked

### Styling Issues
- Clear browser cache
- Check CSS file path
- Verify Google Fonts are loading

## 📞 Support

For questions or issues:
- Check browser console for JavaScript errors
- Verify all files are in the correct directory
- Ensure server supports PHP (for contact form)

## 📄 License

This project is created for educational and demonstration purposes. Feel free to modify and use for your own projects.

---

**Enjoy your beautiful Beauty & Fashion Shop website! ✨** 