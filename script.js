// Show/hide pages
function showSignup() { document.querySelectorAll('.page').forEach(p => p.classList.remove('active')); document.getElementById('signup-page').classList.add('active'); }
function showLogin() { document.querySelectorAll('.page').forEach(p => p.classList.remove('active')); document.getElementById('login-page').classList.add('active'); }
function showDashboard() { document.querySelectorAll('.page').forEach(p => p.classList.remove('active')); document.getElementById('dashboard').classList.add('active'); }

// Sign up
async function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const { data, error } = await window.supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else {
        alert('Sign up successful! Redirecting to dashboard...');
        // Fetch user count to determine their number
        const { count } = await window.supabase.from('users').select('*', { count: 'exact' });
        document.getElementById('welcome-message').textContent = `Welcome to Nigerian Netlify, you are the ${count} user!`;
        showDashboard();
    }
}

// Login
async function logIn() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const { data, error } = await window.supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else {
        const { count } = await window.supabase.from('users').select('*', { count: 'exact' });
        document.getElementById('welcome-message').textContent = `Welcome to Nigerian Netlify, you are the ${count} user!`;
        showDashboard();
    }
}

// Logout
function logOut() {
    window.supabase.auth.signOut();
    showLogin();
}

// Start with sign-up page
window.onload = showSignup;
