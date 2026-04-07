import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { Mail, CheckCircle, Clock, Check, X, Eye } from "lucide-react";
import Swal from "sweetalert2";
import "../../styles/invitations.css";

const Invitations = () => {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null); // ✅ FIX

  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
  const freelancerId = sessionStorage.getItem("user_id") || currentUser.user_id;

  useEffect(() => {
    if (!freelancerId) {
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:1337/api/invitations/${freelancerId}`)
      .then((res) => {
        setInvitations(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        Swal.fire("Error", "Failed to fetch invitations", "error");
      });
  }, [freelancerId]);

  const handleAction = async (inviteId, action) => {
    try {
      setProcessingId(inviteId);

      await axios.put(
        `http://localhost:1337/api/invitations/${inviteId}/${action}`
      );

      setInvitations((prev) =>
        prev.map((inv) =>
          inv.id === inviteId
            ? {
                ...inv,
                status: action === "accept" ? "accepted" : "rejected",
              }
            : inv
        )
      );

      Swal.fire({
        icon: "success",
        title: action === "accept" ? "Accepted" : "Rejected",
        toast: true,
        timer: 2000,
        position: "top-end",
        showConfirmButton: false,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <DashboardLayout role="freelancer">
      <div className="inv-page">
        <div className="inv-header">
          <h1>
            <Mail /> Invitations
          </h1>
          <p>Manage your project invitations</p>
        </div>

        {loading ? (
          <div className="inv-loading">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : invitations.length === 0 ? (
          <div className="inv-empty">
            <Mail size={50} />
            <h3>No Invitations</h3>
          </div>
        ) : (
          <div className="inv-list">
            {invitations.map((inv) => (
              <div key={inv.id} className="inv-card">
                <div className="inv-info">
                  <h3>
                    {inv.project_title}
                    {inv.status === "pending" ? (
                      <Clock />
                    ) : (
                      <CheckCircle />
                    )}
                  </h3>

                  <p>
                    Invited by <strong>{inv.founder_name}</strong>
                  </p>

                  <span className="inv-date">
                    {new Date(inv.created_at).toDateString()}
                  </span>
                </div>

                <div className="inv-actions">
                  {inv.status === "pending" ? (
                    <div className="inv-btn-group" style={{ display: 'flex', gap: '10px' }}>
                      <button
                        disabled={processingId === inv.id}
                        className="btn accept"
                        onClick={() => handleAction(inv.id, "accept")}
                      >
                        <Check size={16} strokeWidth={2.5} /> Accept
                      </button>

                      <button
                        disabled={processingId === inv.id}
                        className="btn reject"
                        onClick={() => handleAction(inv.id, "reject")}
                      >
                        <X size={16} strokeWidth={2.5} /> Reject
                      </button>
                    </div>
                  ) : (
                    <span className={`inv-status ${inv.status}`}>
                      {inv.status}
                    </span>
                  )}

                  <button
                    className="btn outline"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() =>
                      navigate("/apply-project/" + inv.project_id)
                    }
                  >
                    <Eye size={16} strokeWidth={2.5} /> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Invitations;