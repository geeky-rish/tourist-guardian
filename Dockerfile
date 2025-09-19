FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app

RUN apk add --no-cache bash wget

# Copy manifests only, then install with cache
COPY backend/package*.json ./backend/
COPY blockchain/package*.json ./blockchain/

RUN node -v && npm -v

# Install backend dependencies (production)
RUN cd backend && npm ci --omit=dev && cd - >/dev/null
# Install blockchain dependencies if present (not strictly required at runtime)
RUN cd blockchain && (npm ci --omit=dev || true) && cd - >/dev/null

# Copy runtime sources
COPY backend ./backend
COPY blockchain ./blockchain

EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD wget -qO- http://127.0.0.1:5000/health || exit 1

WORKDIR /app/backend
CMD ["node", "server.js"]
