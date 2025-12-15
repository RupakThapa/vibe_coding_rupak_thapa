/**
 * CV Modal Functionality
 * Handles opening/closing CV modals for Text, Visual, and Audio CVs
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCVModal);
  } else {
    initCVModal();
  }

  function initCVModal() {
    const modal = document.getElementById('cv-modal');
    const overlay = modal?.querySelector('.cv-modal__overlay');
    const closeBtn = modal?.querySelector('.cv-modal__close');
    const cvButtons = document.querySelectorAll('[data-cv-type]');

    if (!modal) return;

    // Open modal when CV button is clicked
    cvButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const cvType = this.getAttribute('data-cv-type');
        openCVModal(cvType);
      });
    });

    // Close modal when close button is clicked
    if (closeBtn) {
      closeBtn.addEventListener('click', closeCVModal);
    }

    // Close modal when overlay is clicked
    if (overlay) {
      overlay.addEventListener('click', closeCVModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display !== 'none') {
        closeCVModal();
      }
    });
  }

  function openCVModal(cvType) {
    const modal = document.getElementById('cv-modal');
    const modalBodies = modal.querySelectorAll('.cv-modal__body');
    
    if (!modal) return;

    // Hide all modal bodies
    modalBodies.forEach(body => {
      body.style.display = 'none';
    });

    // Show the selected modal body
    const targetModal = document.getElementById(`cv-modal-${cvType}`);
    if (targetModal) {
      targetModal.style.display = 'block';
    }

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeCVModal() {
    const modal = document.getElementById('cv-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Restore scrolling
      
      // Stop audio if playing
      const audioPlayer = modal.querySelector('.cv-modal__audio-player');
      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      }
    }
  }

  // Make functions globally available if needed
  window.openCVModal = openCVModal;
  window.closeCVModal = closeCVModal;
})();

