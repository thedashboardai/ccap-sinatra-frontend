import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link,
  Paper,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  ArrowBack,
  Email,
  Lock
} from '@mui/icons-material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Add your authentication logic here
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        bgcolor: '#f5f5f5',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: '390px',
          height: {
            xs: '100%',
            sm: '844px' // iPhone 12 Pro Max height
          },
          borderRadius: {
            xs: 0,
            sm: 3
          },
          overflow: 'hidden',
          bgcolor: '#e8f4fc',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: {
            xs: 'none',
            sm: '0 4px 20px rgba(0,0,0,0.15)'
          }
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          {/* Header with back button */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <IconButton
              edge="start"
              sx={{ p: 0, color: '#000' }}
              aria-label="back"
            >
              <ArrowBack />
            </IconButton>
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                ml: 1.5, 
                fontWeight: 'bold', 
                fontSize: '2rem',
                color: '#000'
              }}
            >
              Log In
            </Typography>
          </Box>

          {/* Avatar with welcome message */}
          <Box sx={{ 
            display: 'flex', 
            mt: 3,
            mb: 4,
            alignItems: 'flex-start'
          }}>
            <Box sx={{ 
              width: '120px', 
              height: '120px',
              flexShrink: 0
            }}>
              <img
                src="/images/avatar.png"
                alt="Avatar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>
            <Box sx={{
              ml: 2,
              p: 3,
              bgcolor: '#fff',
              borderRadius: 4,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#333',
                  fontWeight: 400
                }}
              >
                Welcome to Sinatra! Please enter your email and password.
              </Typography>
            </Box>
          </Box>

          {/* Email field */}
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 1,
              color: '#6b7c93',
              fontWeight: 400,
              fontSize: '1rem'
            }}
          >
            Email Address
          </Typography>
          <TextField
            fullWidth
            id="email"
            placeholder="youremail@gmail.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email fontSize="small" sx={{ color: '#6b7c93' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 28,
                bgcolor: '#fff',
                height: 56,
                '& fieldset': {
                  borderColor: 'rgba(0,0,0,0.1)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(0,0,0,0.2)',
                },
              },
              '& .MuiInputBase-input': {
                pl: 0
              }
            }}
          />

          {/* Password field */}
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 1,
              color: '#6b7c93',
              fontWeight: 400,
              fontSize: '1rem'
            }}
          >
            Password
          </Typography>
          <TextField
            fullWidth
            name="password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock fontSize="small" sx={{ color: '#6b7c93' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    sx={{ color: '#6b7c93' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 28,
                bgcolor: '#fff',
                height: 56,
                '& fieldset': {
                  borderColor: 'rgba(0,0,0,0.1)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(0,0,0,0.2)',
                },
              },
              '& .MuiInputBase-input': {
                pl: 0
              }
            }}
          />

          {/* Login button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              py: 1.5,
              bgcolor: '#42a5f5',
              color: 'white',
              '&:hover': {
                bgcolor: '#2196f3',
              },
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              borderRadius: 28,
              boxShadow: 'none',
              height: 56
            }}
          >
            Login
          </Button>

          {/* Forgot password link */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 2 
          }}>
            <Link 
              href="#" 
              sx={{ 
                color: '#42a5f5', 
                textDecoration: 'none',
                fontWeight: 400,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Forgot Password?
            </Link>
          </Box>

          {/* Terms and Policy */}
          <Box sx={{ 
            mt: 'auto', 
            textAlign: 'center', 
            py: 3 
          }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#6b7c93',
                fontSize: '0.875rem',
                px: 2
              }}
            >
              By logging in to Sinatra, you agree to our {' '}
              <Link href="#" sx={{ color: '#42a5f5' }}>
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="#" sx={{ color: '#42a5f5' }}>
                Privacy Policy
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;