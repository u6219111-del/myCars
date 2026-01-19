import React from 'react';

function TestFonts() {
  return (
    <div style={{ 
      padding: '50px', 
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '80px', 
        fontWeight: 'bold', 
        color: 'red',
        marginBottom: '20px'
      }}>
        TEST LARGE TITLE
      </h1>
      
      <div style={{ 
        display: 'flex', 
        gap: '40px', 
        marginTop: '30px' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ 
            fontSize: '90px', 
            fontWeight: 'bold', 
            color: 'blue' 
          }}>
            999+
          </span>
          <p style={{ fontSize: '16px', color: '#666' }}>
            Test Label 1
          </p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <span style={{ 
            fontSize: '90px', 
            fontWeight: 'bold', 
            color: 'green' 
          }}>
            888+
          </span>
          <p style={{ fontSize: '16px', color: '#666' }}>
            Test Label 2
          </p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <span style={{ 
            fontSize: '90px', 
            fontWeight: 'bold', 
            color: 'purple' 
          }}>
            777+
          </span>
          <p style={{ fontSize: '16px', color: '#666' }}>
            Test Label 3
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestFonts;